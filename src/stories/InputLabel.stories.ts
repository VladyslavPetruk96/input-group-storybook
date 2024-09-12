import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import InputLabel from "../components/InputLabel/InputLabel";

type StoryProps = ComponentProps<typeof InputLabel>;
const meta: Meta<StoryProps> = {
	component: InputLabel,
	argTypes: {
		iconInfo: {
			control: {
				type: "boolean",
			},
		},
		labelName: {
			control: {
				type: "text",
			},
		},
	},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const InfoIcon: Story = {
	args: {
		labelName: "Email",
		iconInfo: true,
	},
};
