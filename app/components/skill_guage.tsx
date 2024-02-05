import { NextPage } from "next";
import Image from "next/image";

type Props = {
	skill_icon: string;
	skill_name: string;
	skill_level: number;
};

export const SkillGauge: NextPage<Props> = ({
	skill_icon,
	skill_name,
	skill_level,
}) => {
	console.log(`w-[${skill_level}%]`);
	return (
		<div className='self-stretch flex flex-row items-start justify-start py-0 px-0 max-w-full'>
			<div className='flex-1 flex flex-row items-center justify-start gap-[16px] max-w-full mq450:flex-wrap'>
				<Image
					src={skill_icon}
					width={40}
					height={40}
					className='h-20 w-20 relative object-cover'
					alt=''
				/>
				<div className='flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[156px]'>
					<b className='relative mq450:text-lgi'>{skill_name}</b>
					<div className='self-stretch h-2 relative'>
						<div className='absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-darkgray' />
						<div
							className={`absolute h-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-limegreen z-[1]`}
							style={{ width: `${skill_level}%` }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillGauge;
