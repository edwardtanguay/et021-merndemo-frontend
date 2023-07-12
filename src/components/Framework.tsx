import { IFramework } from "../interfaces";

interface IProps {
	framework: IFramework;
}

export const Framework = (props: IProps) => {
	const framework = props.framework;
	return (	
		<div className="framework">
			<div className="title">{framework.title}</div>
			<div className="description">{framework.description}</div>
		</div>
	);
};
