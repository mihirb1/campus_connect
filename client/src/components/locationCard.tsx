
// import anteaterImg from "../assets/anteater.png";
import defaultImgURL from "../assets/Campus.jpg"

export type Location = {
	name: string;
	address: string;
	imgURL: string;
	lng: number;
	lat: number;
};

export type SearchResultCardProps = Location & {
	onClickAdd: () => void;
	doReward: boolean
};

export type SavedLocationCardProps = Location & {
	onClickRemove: () => void;
	onClickSetOrigin: () => void;
	isOrigin: boolean;
};


export function SearchResultCard(props: SearchResultCardProps) {
	return (
		<div className="flex flex-row gap-5 bg-neutral-700/90 p-5 rounded-md border-1 border-white/20">
			<div className="flex flex-col gap-3 min-w-[200px] max-w-[200px] justify-center items-center">
				<img
					src={props.imgURL !== "" ? props.imgURL : defaultImgURL}
					className="w-full h-40 rounded-xl"
					onError={(e) => (e.currentTarget.src = defaultImgURL)}
				/>
				{/* {
					props.doReward ? <img src={anteaterImg} className="w-20 h-10"></img> : null
				} */}
				
			</div>
			<div className="flex flex-col gap-5">
				<span className="text-2xl overflow-ellipsis">{props.name}</span>
				<span className="text-gray-300">{props.address}</span>
				<div className="flex flex-col gap-2">
					<span>Latitude: {props.lat} </span>
					<span>Longitude: {props.lng} </span>
				</div>

				<div className="flex gap-10 items-center">
					<i
						className="bi bi-plus-square hover:text-green-400 text-2xl font-semibold"
						onClick={props.onClickAdd}
					></i>
					<span className="text-lg">Add to Trip</span>
				</div>
			</div>
		</div>
	);
}

export function AddedLocationCard(props: SavedLocationCardProps) {
	return (
		<div
			className={`flex flex-row gap-5 bg-neutral-700/90 p-5 rounded-md border-2  ${
				props.isOrigin ? "border-purple-600" : "border-white/20"
			}`}
		>
			<img
				src={props.imgURL !== "" ? props.imgURL : defaultImgURL}
				className=" min-w-[200px] max-w-[200px]  h-40 rounded-xl"
				onError={(e) => (e.currentTarget.src = defaultImgURL)}
			></img>
			<div className="flex flex-col gap-5 w-full">
				<span className="text-2xl overflow-ellipsis">{props.name}</span>
				<span className="text-gray-300">{props.address}</span>
				<div className="flex flex-col gap-2">
					<span>Latitude: {props.lat} </span>
					<span>Longitude: {props.lng} </span>
				</div>

				<div className="flex justify-between items-center w-full">
					<div className="flex gap-2 items-center">
						<i
							className="bi bi bi-crosshair hover:text-purple-500 text-2xl font-semibold whitespace-nowrap"
							onClick={props.onClickSetOrigin}
						></i>
						<span className="">
							{props.isOrigin ? "Origin" : "Set as Origin"}
						</span>
					</div>

					<div className="flex gap-2 items-center">
						<i
							className="bi bi-x-square hover:text-red-400 text-2xl font-semibold whitespace-nowrap"
							onClick={props.onClickRemove}
						></i>
						<span className="">Remove from trip</span>
					</div>
				</div>
			</div>
		</div>
	);
}
