import Table from './Table'
import React, { RefObject } from 'react'
import { withRouter, useRouter } from 'next/router'

const GridTableWithRouter = React.forwardRef((props: any, ref: any) => {
	const router = useRouter()
	return <Table ref={ref} router={router} {...props} />
}) as any

GridTableWithRouter.getOptions = Table.getOptions
GridTableWithRouter.getDataFromQuery = Table.getDataFromQuery
GridTableWithRouter.makeQuery = Table.makeQuery

const GridTableHelper = {
    getOptions: Table.getOptions,
    getDataFromQuery: Table.getDataFromQuery,
    makeQuery: Table.makeQuery
}
export default GridTableWithRouter
export {
    GridTableHelper
}