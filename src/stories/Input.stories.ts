import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Input } from "../components/Input/Input";

type StoryProps = ComponentProps<typeof Input>;
const meta: Meta<StoryProps> = {
	component: Input,
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: {
				type: "select",
			},
		},
		alignment: {
			control: {
				type: "select",
			},
		},
		border: {
			control: {
				type: "boolean",
			},
		},
		placeholder: {
			control: {
				type: "text",
			},
		},
		iconBefore: {
			control: {
				type: "boolean",
			},
		},
		iconAfter: {
			control: {
				type: "boolean",
			},
		},
		shortkey: {
			control: {
				type: "boolean",
			},
		},
	},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Md: Story = {
	args: {
		size: "md",
		alignment: "left",
		border: true,
		placeholder: "email...",
		iconBefore: true,
		iconAfter: true,
		shortkey: true,
	},
};
