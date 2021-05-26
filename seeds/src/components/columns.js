
export const COLUMNS = [
    {
        Header: 'Title',
        accessor: 'title',
        //disableFilters: true,
        show: true,
        width: "100px",
        sortable: false,
        filterable: false
        },
    {
        Header: 'Author',
        accessor: 'author',
        //disableFilters: true,
        show: true
    },
    {
        Header: 'Date',
        accessor: 'date',
        //disableFilters: true,
        show: true,
    },
    {
        Header: 'SE Practice',
        accessor: 'se_practice',
        show: true
    },
    {
        Header: 'Claim',
        accessor: 'claim',
        show: true
    },
    {
        Header: 'Level of Evidence',
        accessor: 'level_of_evidence',
        disableFilters: true,
        show: true
    },
    {
        Header: 'Ten',
        accessor: 'ten',
        disableFilters: true,
        hideHeader: true,
        show: false
    },
    {
        Header: 'Five',
        accessor: 'five',
        disableFilters: true,
        hideHeader: true,
        show: false
    },
    {
        Header: 'One',
        accessor: 'one',
        disableFilters: true,
        hideHeader: true,
        show: false
    }
]