export interface MenuItem {
    id: number;
    name: string;
    image: string | null;
    description: string | null;
    item_type: string;
    category: string;
    category_id: number;
    price: number
}
