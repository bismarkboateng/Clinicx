export default function index({img,name,position,className}) {
	return (
		<>
			<div className={`flex flex-col p-5 gap-y-2 ${className}`}>
				<div className="flex flex-col p-5 gap-y-2 rounded-xl shadow-lg">
					<img src={img} alt="" className={"rounded-xl "} />
					<div className="flex-col flex gap-y-1">
						<span className="text-center text-[#170F49] text-2xl font-bold">
							{name}
						</span>
						<span className="text-center text-[#79dd97] uppercase font-bold tracking-wide">
							{position}
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
