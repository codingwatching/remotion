import React from 'react';
import {Slider} from './components/ui/slider';

import {CheckboxWithLabel} from './Checkbox';
import {CodeFrameTabs} from './CodeFrame';
import {Tabs, TabsContent, TabsList, TabsTrigger} from './components/ui/tabs';
import {PADDING_LEFT} from './draw-trajectory';
import {SliderLabel} from './SliderLabel';
import {Spacing} from './Spacing';

export const Sidebar: React.FC<{
	readonly mass: number;
	readonly damping: number;
	readonly stiffness: number;
	readonly fixedDurationInFrames: number | null;
	readonly calculatedDurationInFrames: number;
	readonly delay: number;
	readonly onMassChange: (e: [number]) => void;
	readonly onDampingChange: (e: [number]) => void;
	readonly onStiffnessChange: (e: [number]) => void;
	readonly onDurationInFramesChange: (e: number | null) => void;
	readonly onDelayChange: (e: number) => void;
	readonly overshootClamping: boolean;
	readonly onRelease: () => void;
	readonly onOvershootClampingChange: (checked: boolean) => void;
	readonly reverse: boolean;
	readonly onReverseChange: (checked: boolean) => void;
}> = ({
	mass,
	onDampingChange,
	onMassChange,
	onStiffnessChange,
	onDurationInFramesChange,
	fixedDurationInFrames,
	overshootClamping,
	onRelease,
	damping,
	stiffness,
	calculatedDurationInFrames,
	onOvershootClampingChange,
	onReverseChange,
	reverse,
	delay,
	onDelayChange,
}) => {
	return (
		<div
			id="sidebar"
			style={{
				padding: PADDING_LEFT,
				display: 'flex',
				flexDirection: 'column',
				borderLeft: '1px solid #242424',
			}}
		>
			<Tabs defaultValue="configuration">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="configuration">Configuration</TabsTrigger>
					<TabsTrigger value="code">Code</TabsTrigger>
				</TabsList>
				<TabsContent value="configuration">
					<Spacing y={3} />
					<Slider
						value={[mass]}
						min={0.3}
						step={0.1}
						max={10}
						onValueChange={onMassChange}
						onPointerUp={onRelease}
					/>
					<SliderLabel label="mass" value={mass} toggleable={null} />
					<br />
					<Slider
						min={1}
						max={200}
						value={[damping]}
						onValueChange={onDampingChange}
						onPointerUp={onRelease}
					/>
					<SliderLabel label="damping" value={damping} toggleable={null} />
					<br />
					<Slider
						min={1}
						max={200}
						value={[stiffness]}
						onValueChange={onStiffnessChange}
						onPointerUp={onRelease}
					/>
					<SliderLabel toggleable={null} label="stiffness" value={stiffness} />
					<br />
					<Slider
						min={0}
						max={400}
						value={[delay]}
						onValueChange={(val) => {
							onDelayChange(val[0]);
						}}
						onPointerUp={onRelease}
					/>
					<SliderLabel label="delay" toggleable={null} value={delay} />
					<br />
					<>
						<Slider
							min={1}
							max={200}
							value={[fixedDurationInFrames ?? calculatedDurationInFrames]}
							style={{opacity: fixedDurationInFrames === null ? 0.5 : 1}}
							onValueChange={(val) => {
								onDurationInFramesChange(val[0]);
							}}
							onPointerUp={onRelease}
						/>
						<SliderLabel
							label="durationInFrames"
							toggleable={(enabled) => {
								if (enabled) {
									onDurationInFramesChange(calculatedDurationInFrames);
								} else {
									onDurationInFramesChange(null);
								}
							}}
							value={fixedDurationInFrames ?? null}
						/>
					</>
					<br />
					<CheckboxWithLabel
						checked={overshootClamping}
						id="overshootClamping"
						onCheckedChange={onOvershootClampingChange}
					/>
					<CheckboxWithLabel
						checked={reverse}
						id="reverse"
						onCheckedChange={onReverseChange}
					/>
					<Spacing y={2} />
				</TabsContent>
				<TabsContent value="code">
					<CodeFrameTabs
						delay={delay}
						damping={damping}
						mass={mass}
						stiffness={stiffness}
						overshotClamping={overshootClamping}
						reverse={reverse}
						durationInFrames={fixedDurationInFrames}
					/>
				</TabsContent>
			</Tabs>
		</div>
	);
};
