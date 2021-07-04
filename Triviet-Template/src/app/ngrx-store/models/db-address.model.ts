export class Local_VN {
    id: number;
    code: string;
    name: string;
    districts: Array<Districts>
}

export class Districts {
    id: number;
    name: string;
    wards: Array<Wards>;
    streets: Array<Streets>;
}

export class Wards {
    id: number;
    name: string;
    prefix: string;
}

export class Streets {
    id: number;
    name: string;
    prefix: string;
}