import { useState, useEffect } from 'react';

export const useFontSelection = () => {
    const [selectedIds, setSelectedIds] = useState([]);

    const handleSelect = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const clearSelection = () => {
        setSelectedIds([]);
    };

    useEffect(() => {
        console.log("선택된 id(업데이트 후):", selectedIds);
    }, [selectedIds]);

    return { selectedIds, handleSelect, clearSelection };
}; 