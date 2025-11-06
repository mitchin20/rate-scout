export interface FormField {
    id: string;
    label: string;
    type: 'text' | 'number' | 'select';
    required?: boolean;
    default?: string | number;
    placeholder?: string;
    min?: number;
    options?: (string | number)[];
    displayMap?: Record<string | number, string>;
}

export interface FormStep {
    id: string;
    title: string;
    fields: FormField[];
}

export interface FormConfig {
    steps: FormStep[];
}
