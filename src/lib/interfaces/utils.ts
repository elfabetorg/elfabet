// Open call

export interface Call {
	_id: string;
	orgID: string;
	title: string;
	status: CallStatus;
	startsOn: Date;
	endsOn: EndsOn;
	workflowID: string;
	submissionIDs: string[];
	hasMaxCapacity: boolean;
	capacity?: number;
	hasSubmissionFee: boolean;
	submissionFee?: number;
	autoCheckRequirements: boolean;
	hasRequirements: boolean;
	requirements?: Requirement[];
	form: SubmissionForm;
	currency: string; // TODO: *cry* make this an enum
	emails?: EmailTemplate[]
}

export enum CallStatus {
	active = "active",
	inactive = "inactive",
	unlisted = "unlisted",
	draft = "draft"
}

export interface EndsOn {
	type: CallEndsOnType,
	date?: Date
}

export enum CallEndsOnType {
	never = "Never",
	quota = "Quota",
	date = "Date"
}

export interface Requirement {
	property: RequirementProperty;
	relation: RequirementRelation;
	limit: number;
}

export enum RequirementProperty {
	pageCount = "pageCount",
	wordCount = "wordCount"
}

export enum RequirementRelation {
	smallerThan = "<",
	smallerThanEqualTo = "≤",
	equalTo = "=",
	largerThan = ">",
	largerThanEqualTo = "≥",
}

// Email templates

export interface EmailTemplate {
	emailType: EmailType;
	content: string;
	fields: string[]
}

export enum EmailType {
	confirmation = "confirmation",
	acceptance = "acceptance",
	rejection = "rejection",
	tiered = "tiered"
}

// Submission form 

export interface SubmissionForm {
	description: string;
	questions: SubmissionQuestion[];
}

export interface SubmissionQuestion {
	title: string;
	description: string;
	type: SubmissionQuestionType;
	answerOptions?: string[];
	allowedFileTypes?: string[];
	required: boolean
}

export enum SubmissionQuestionType {
	text = "text",
	richText = "richText",
	multipleChoice = "multiple_choice",
	checkboxes = "checkboxes",
	fileUpload = "file_upload"
	// TODO payment and address
}

// NOTE: fix this dummy data?

export const calls : Call[] = [
	{
		_id: "1",
		orgID: "elfabetorg",
		title: "Poetry - August 2023",
		status: CallStatus.active,
		startsOn: new Date(),
		endsOn: {
			type: CallEndsOnType.date,
			date: new Date("09-01-2024"),
		},
		workflowID: "asd0221321asd", 
		submissionIDs: ["akdjhasd"], 
		hasMaxCapacity: true,
		capacity: 20,
		hasSubmissionFee: true,
		submissionFee: 3,
		autoCheckRequirements: true,
		hasRequirements: true, 
		requirements: [{
			property: RequirementProperty.wordCount,
			relation: RequirementRelation.largerThan,
			limit: 20
		}],
		form: {
			description: "If your work makes grammatical sense we'll publish it.",
			questions: [
				{
					title: "Cover Letter",
					description: "Paste your cover letter in the box below.",
					type: SubmissionQuestionType.text,
					required: true
				},
				{
					title: "Work Submission",
					description: "Attach your works.",
					type: SubmissionQuestionType.fileUpload,
					allowedFileTypes: ["pdf", "docx", "txt"],
					required: true
				},
			]
		}, 
		currency: "usd", 
		emails: [
			{
				emailType: EmailType.acceptance,
				content: `
					Dear {Name},
					Congratulations on being accepted to Schrodinger Review!
					Sincerely,
					Erwin Schrodinger and his cat
				`,
				fields: ["{Name}"]
			}
		]
	},
	{
		_id: "2",
		orgID: "elfabetorg",
		title: "Dead Cat Poetry Contest",
		status: CallStatus.active,
		startsOn: new Date(),
		endsOn: {
			type: CallEndsOnType.quota,
		},
		workflowID: "asd0221321asd", 
		submissionIDs: ["akdjhasd", "qlaksduas", "aldaisupd", "akdjhslkd"], 
		hasMaxCapacity: true,
		capacity: 5,
		hasSubmissionFee: true,
		autoCheckRequirements: true,
		hasRequirements: true, 
		requirements: [{
			property: RequirementProperty.wordCount,
			relation: RequirementRelation.largerThan,
			limit: 20
		}],
		form: {
			description: "If your work makes grammatical sense we'll publish it.",
			questions: [
				{
					title: "Cover Letter",
					description: "Paste your cover letter in the box below.",
					type: SubmissionQuestionType.text,
					required: true
				},
				{
					title: "Work Submission",
					description: "Attach your works.",
					type: SubmissionQuestionType.fileUpload,
					allowedFileTypes: ["pdf", "docx", "txt"],
					required: true
				},
			]
		}, 
		currency: "usd",
		emails: [
			{
				emailType: EmailType.acceptance,
				content: `
					Dear {Name},
					Congratulations on being accepted to Schrodinger Review!
					Sincerely,
					Erwin Schrodinger and his cat
				`,
				fields: ["{Name}"]
			}
		]
	}
];