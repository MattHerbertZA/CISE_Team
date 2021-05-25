import { ColumnFilter } from "./ColumnFilter"
import React from "react";
import { text } from "body-parser";




export const COLUMNS = [
    {
        Header: 'Title',
        accessor: 'title',
        disableFilters: true
    },
    {
        Header: 'Author',
        accessor: 'author',
        disableFilters: true
    },
    {
        Header: 'Date',
        accessor: 'date',
        disableFilters: true,

    },
    {
        Header: 'SE Practice',
        accessor: 'se_practice',
    },
    {
        Header: 'Claim',
        accessor: 'claim',
    },
    {
        Header: 'Level of Evidence',
        accessor: 'level_of_evidence',
        disableFilters: true
    }
    ,{
        Header: 'Test',
        accessor: 'test',
        disableFilters: true,
        hideHeader: true
    }
]