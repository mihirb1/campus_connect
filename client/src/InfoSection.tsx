// InfoSection.tsx
import './InfoSection.css';
import { motion } from 'framer-motion'; // ✅ new import

const infoCards = [
  {
    title: 'Discover Local Events',
    desc: 'Stay in the loop with events happening around your campus. From club meetings to concerts, find something that fits your vibe.',
    img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Connect with Students',
    desc: 'CampusConnect helps you meet students with similar interests. Join group chats, discussions, and shared experiences.',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Organize Your Own Events',
    desc: 'Host study sessions, club activities, or meetups with ease using our event planning tools.',
    img: 'https://media.istockphoto.com/id/1453843862/photo/business-meeting.jpg?s=612x612&w=0&k=20&c=4k9H7agmpn92B7bkUywvkK5Ckwm9Y8f8QrGs4DRDWpE=',
  },
  {
    title: 'Map-Based Search',
    desc: 'Use our interactive map to find events near dorms, cafes, libraries, or wherever you like to hang out.',
    img: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Stay Notified',
    desc: 'Receive timely email and in-app alerts so you never miss events or RSVP deadlines.',
    img: 'https://media.istockphoto.com/id/1363616629/video/text-message-notification-pops-up-on-mobile-smart-phone-in-home-office.jpg?s=640x640&k=20&c=4niPIerpz2nNCZy7NFIdCAYCsAcTiLFuXu-bwXJQmzw=',
  },
  {
    title: 'Safe & Inclusive Spaces',
    desc: 'Report issues, give feedback, and browse events that prioritize accessibility, inclusion, and student safety.',
    img: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&q=60',
  },
];

const InfoSection = () => {
  return (
    <section className="info-section">
      <h2 className="info-title">Why Use CampusConnect?</h2>
      <div className="info-card-grid">
        {infoCards.map((card, idx) => (
          <motion.div
            className="info-card"
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.08,
              zIndex: 2,
              transition: { duration: 0 }, // 👈 instant on enter and exit
            }}
            transition={{ duration: 0.4, delay: idx * 0.1 }} // 👈 only for initial fade-in
            viewport={{ once: true, amount: 0.2 }}
          >
            <img src={card.img} alt={card.title} className="info-img" />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>


        ))}
      </div>
    </section>
  );
};

export default InfoSection;
