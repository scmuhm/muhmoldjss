import { Placeholder } from "@sitecore-jss/sitecore-jss-nextjs";
import { ComponentProps } from "lib/component-props";

export const Default = (props: ComponentProps): JSX.Element => {
    const placeholderName = 'pm-small-accord-placeholder';

    return(
        <div>
            <h2>test placeholder</h2>
            <Placeholder name={placeholderName} rendering={props?.rendering} />
        </div>
    )
}
