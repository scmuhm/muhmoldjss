import { ComponentProps } from "lib/component-props";
import { AccordionSection } from "./AccordionSection";

export const Default = (props: ComponentProps): JSX.Element => {
    const placeholderName = 'pm-small-accord-placeholder';

    return(
        <div>
            <h2>test placeholder</h2>
            <AccordionSection placeholderName={placeholderName} props={props} />
        </div>
    )
}
