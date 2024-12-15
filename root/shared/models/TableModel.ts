export type TableModel = {
    headers: { key: string; label: string }[];
    rows: { [key: string]: React.ReactNode }[];
};