import React, { useEffect, useRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (value: string) => void;
}

const LocationAutocomplete: React.FC<Props> = ({ value, onChange, ...props }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const loadScript = () => {
      if (document.getElementById('google-maps')) return;

      const script = document.createElement('script');
      script.id = 'google-maps';
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCDm-kHtEIsMQMo_VkGQ3pWDz_eu7S9O-0&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initAutocomplete;
      document.body.appendChild(script);
    };

    const initAutocomplete = () => {
      if (!window.google || !inputRef.current) return;

      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['geocode'], // or ['(cities)'], ['establishment'], etc.
      });

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const address = place.formatted_address || place.name || '';
        onChange(address);
      });
    };

    loadScript();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    />
  );
};

export default LocationAutocomplete;
