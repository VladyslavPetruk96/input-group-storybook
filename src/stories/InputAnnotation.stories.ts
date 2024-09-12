import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import InputAnnotation from "../components/InputAnnotation/InputAnnotation";

type StoryProps = ComponentProps<typeof InputAnnotation>;
const meta: Meta<StoryProps> = {
	component: InputAnnotation,
	argTypes: {
		hint: {
			control: {
				type: "boolean",
			},
		},
		text: {
			control: {
				type: "text",
			},
		},
	},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Hint: Story = {
	args: {
		text: "annotation text",
		hint: true,
	},
};
