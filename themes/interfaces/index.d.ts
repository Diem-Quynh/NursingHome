interface Admin {
    id: number,
    fullname: string,
    username: string,
    groupId: number,
}

interface AdminGroup {
    id: number,
    name: string,
    description: string
}

interface Room {
    id: number,
    code: string,
    bedNumber: number,
    note: string
}

interface Bed {
    id: number,
    roomCode: string,
    bedId: number,
    status: number,
    note: string
}

interface Patient {
    id: number,
    code: string,
    fullname: string,
    birthday: Date,
    gender: number,
    address: string,
    cardId: string,
    phone: string,
    medicalHistory: string,
    dateIn: Date,
    dateOut: Date,
    bedId: number,
    roomCode: string,
    bedCode:number
}

interface DoctorAssignment {
    id: number,
    doctorId: number,
    roomCode: string,
    dateBegin: Date,
    dateEnd: Date,
    note: string
}

interface NurseAssignment {
    id: number,
    nurseId: number,
    patientId: number,
    dateBegin: Date,
    dateEnd: Date,
    note: string
}

interface HealthStatus {
    id: number,
    patientId: number,
    date: Date,
    weight: number,
    bloodPressure: string,
    bloodSugar: number,
    heartRate: number,
    doctorId: number,
    note: string
}

interface UserGroup {
    id: number,
    name: string,
    description: string
}

interface User {
    id: number,
    code: string,
    fullname: string,
    position: string,
    birthday: Date,
    gender: number,
    address: string,
    cardId: string,
    email: string,
    phone: string,
    username: string,
    groupId: number
}

interface Permission {
    id?: number,
    name: string,
    description: string,
    key: string,
    avalibleValue: number,
    groupId: number,
    value?: number
}

interface PermissionCategories {
    id: number,
    name: string,
    description: string
    permissions: Permission[]
}