import { Placeholder } from "@sitecore-jss/sitecore-jss-nextjs";
import { ComponentProps } from "lib/component-props";

type AccordionSectionProps = {
    placeholderName: string;
    props: ComponentProps;
}

export const AccordionSection = (props: AccordionSectionProps): JSX.Element => {
    return (
        <Placeholder name={props.placeholderName} rendering={props.props.rendering} />
    )
}