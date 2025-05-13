import type {
	CanUseWhisperWebResult,
	canUseWhisperWeb as originalCanUseWhisperWeb,
	WhisperWebUnsupportedReason,
} from './can-use-whisper-web';
import type {WhisperWebLanguage, WhisperWebModel} from './constants';
import type {deleteModel as originalDeleteModel} from './delete-model';
import type {
	DownloadWhisperModelOnProgress,
	DownloadWhisperModelParams,
	DownloadWhisperModelProgress,
	DownloadWhisperModelResult,
	downloadWhisperModel as originalDownloadWhisperModel,
} from './download-whisper-model';
import type {getLoadedModels as originalGetLoadedModels} from './get-loaded-models';
import type {
	resampleTo16Khz as originalResampleTo16Khz,
	ResampleTo16KhzParams,
} from './resample-to-16khz';
import type {
	transcribe as originalTranscribe,
	TranscribeParams,
} from './transcribe';

export const transcribe: typeof originalTranscribe = () => {
	throw new Error(
		'Loading this module from CommonJS is not supported. Load the ESM version of @remotion/whisper-web.',
	);
};

export const downloadWhisperModel: typeof originalDownloadWhisperModel = () => {
	throw new Error(
		'Loading this module from CommonJS is not supported. Load the ESM version of @remotion/whisper-web.',
	);
};

export const getLoadedModels: typeof originalGetLoadedModels = () => {
	throw new Error(
		'Loading this module from CommonJS is not supported. Load the ESM version of @remotion/whisper-web.',
	);
};

export const deleteModel: typeof originalDeleteModel = () => {
	throw new Error(
		'Loading this module from CommonJS is not supported. Load the ESM version of @remotion/whisper-web.',
	);
};

export const canUseWhisperWeb: typeof originalCanUseWhisperWeb = () => {
	throw new Error(
		'Loading this module from CommonJS is not supported. Load the ESM version of @remotion/whisper-web.',
	);
};

export const resampleTo16Khz: typeof originalResampleTo16Khz = () => {
	throw new Error(
		'Loading this module from CommonJS is not supported. Load the ESM version of @remotion/whisper-web.',
	);
};

export type {
	CanUseWhisperWebResult,
	DownloadWhisperModelOnProgress,
	DownloadWhisperModelParams,
	DownloadWhisperModelProgress,
	DownloadWhisperModelResult,
	ResampleTo16KhzParams,
	TranscribeParams,
	WhisperWebLanguage,
	WhisperWebModel,
	WhisperWebUnsupportedReason,
};
