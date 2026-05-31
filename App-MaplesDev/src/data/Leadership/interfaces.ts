export interface Person {
    /** full or first name */
    name: string;
    
    /** ex: president, vice-president, board member, etc. */
    position: string;
    
    /** name of the project currently involved in */
    project: string;
    
    /** role in the project currently involved in */
    project_role: string;
    
    /** grade level or tech related course enrolled in this semester */
    grade?: string;
    
    /** Optional, anything to include about your self */
    description?: string;
    
    /** Optional, image url */
    image?: string;
};

export interface Member {
    year: string;
    members_count: number;
};