import { useState } from "react";
import coursesList from "../mocks/coursesList";

const DEFAULT_LIST_SIZE = 6;
const ADDED_COUNT_TO_LIST = 3;

export const useCourses = () => {
    const [list, setList] = useState(coursesList || []);
    const [listSize, setListSize] = useState(DEFAULT_LIST_SIZE);

    const handleSetListSize = () => {
        setListSize(listSize + ADDED_COUNT_TO_LIST);
    };

    return {
        isShowMoreButtonVisible: list.length > listSize,
        list: list.slice(0, listSize),
        setListSize: handleSetListSize,
    };
};
export default useCourses;
