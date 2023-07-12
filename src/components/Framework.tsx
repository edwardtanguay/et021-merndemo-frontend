import { IFramework } from "../interfaces";

interface IProps {
	framework: IFramework;
}

export const Framework = ({framework}: IProps) => {
	return (	
		<div className="framework">
			<div className="title">{framework.title}</div>
			<div className="description">{framework.description}</div>
		</div>
	);
};
