import { NextResponse } from "next/server";


const images = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "https://media.istockphoto.com/id/1475880027/photo/young-woman-laughing-while-talking-with-her-friends-sitting-at-a-table.jpg?s=2048x2048&w=is&k=20&c=YMCai75usqcjBpEwym0qhb1lsp9vgp-uEkrQthq6YqA=",
    "https://media.istockphoto.com/id/1975776233/photo/parisian-morning-delights-street-cafe-breakfast-scene-on-a-sunny-day-in-saint-germain-des.jpg?s=2048x2048&w=is&k=20&c=H4KxBnwDUemDVlqYFeDRsOzaRWZA641T_rZV4xMCwak=",
    "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
    "https://images.unsplash.com/photo-1525480122447-64809d765ec4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export function GET() {
    return NextResponse.json({ data: images });
}
