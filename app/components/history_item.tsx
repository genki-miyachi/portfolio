import { NextPage } from "next";
import Image from "next/image";

type Props = {
	company_name: string;
	role: string;
	duration: string;
	discription: string;
};

export const HistoryItem: NextPage<Props> = ({
	company_name,
	role,
	duration,
	discription,
}) => {
	return (
		<div className='flex flex-col gap-4 p-4 text-left'>
			<div className='flex gap-4 text-gray-500 text-gray-500'>
				<div className='flex-grow'>
					<h3 className='text-xs text-white mq450:text-[32px] mq1050:text-[80px]'>
						{role}
					</h3>
					<p className='text-xm mq450:text-[24px] mq1050:text-[48px]'>
						{company_name} - {duration}
					</p>
					<p className='text-xs mt-2 mq450:text-[18px] mq1050:text-[48px]'>
						{discription}
					</p>
				</div>
			</div>
		</div>
	);
};
