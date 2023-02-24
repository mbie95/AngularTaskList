//interface reprezentujacy zadania, ktore chcemy wyswietlic z listy
//exportowany, aby byl widoczny na zewnatrz pliku
export interface Task {
    name: string,
    deadline: string,
    done: boolean
}