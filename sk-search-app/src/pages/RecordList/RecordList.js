import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import "./RecordList.scss"
import moment from 'moment'
import TesodevLogo from "../../components/TesodevLogo";
import Search from "../../components/search/Search";
import Button from "../../components/Button";
import RecordListItem from "../../components/RecordListItem/RecordListItem";
export default function RecordList() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const searchedData = useSelector(state => state.getSearchedData)
    const pageSize = 10;
    const totalPage = Math.ceil(searchedData.length / pageSize)
    const [selectedPage, setSelectedPage] = useState(0)
    const [orderBy, setOrderBy] = useState([
        "Order by", "Name Ascending",
        "Name Descending",
        "Year Ascending",
        "Year Descending"])
    const [orderType, setOrderType] = useState(0)
    const [enabledOrderByList, setEnabledOrderByList] = useState(false)
    function addNewRecord(e) {
        navigate("/AddNewRecord")
    }
    useEffect(() => {
        console.log("totalpage");
        console.log(totalPage)

    });
    const prevClick = () => {
        console.log("prev");
        if (selectedPage > 0) {
            setSelectedPage(selectedPage - 1)
        }
    }
    const nextClick = () => {
        console.log(selectedPage);
        if (selectedPage < totalPage - 1) {
            setSelectedPage(selectedPage + 1)
        }
    }
    const orderByBtnClk = () => {
        setEnabledOrderByList(!enabledOrderByList)
    }
    const changeOrderBy = (orderById) => {
        setEnabledOrderByList(!enabledOrderByList)
        setOrderType(orderById)
        console.log(orderById)
        switch (orderById) {
            case 1:
                console.log("name asc order by");
                console.log(searchedData.sort((a, b) => { return a[0].toString().toLowerCase() > b[0].toString().toLowerCase() }));
                break;
            case 2:
                console.log("name desc order by");
                console.log(searchedData.sort((a, b) => { return a[0].toString().toLowerCase() < b[0].toString().toLowerCase() }));
                break;
            case 3:
                console.log("date asc order by");
                //console.log(searchedData.sort((a, b) => { return a[3].toString().toLowerCase() > b[3].toString().toLowerCase() }));
                console.log(searchedData.sort((a, b) =>
                    a[3].split('/').reverse().join().localeCompare(b[3].split('/').reverse().join())));
                break;
            case 4:
                console.log("date desc order by");
                console.log(searchedData.sort((a, b) =>
                    b[3].split('/').reverse().join().localeCompare(a[3].split('/').reverse().join())));
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <div className="headerCont">
                <div className="logoCont">
                    <TesodevLogo />
                </div>
                <div className="searchContainer1">
                    <Search searchType="all" />
                </div>
                <div className="addNewContainer1">
                    <Button text="Add new record" func={addNewRecord} />
                </div>
            </div>
            <div className="orderByContainer">
                <div>
                    <Button text={orderBy[orderType]} func={orderByBtnClk} />
                    {enabledOrderByList ?
                        <div className="orderListContainer">
                            {orderBy.slice(1).map((d, index) => {
                                return (
                                    <div className="orderByItemContainer" style={{ textAlign: 'left' }} onClick={() => changeOrderBy(index + 1)}>
                                        {d}
                                    </div>
                                )
                            })}
                        </div> : null}
                </div>
            </div>
            <div className="listBodyContainer">
                <div>
                    <div >
                        <RecordListItem
                            startIndex={pageSize * selectedPage}
                            endIndex={pageSize * (selectedPage + 1)}
                        />
                    </div>
                    {totalPage > 1 ? <div className="paginationContainer">
                        <div
                            className="nextPrev"
                            onClick={() => prevClick()}>Previous</div>
                        {searchedData.slice(0, totalPage).map((d, index) => {
                            if ((index < selectedPage + 3 && index > selectedPage - 3) || index == totalPage - 1 || index == 0) {
                                return (<div
                                    style={index == selectedPage ? { backgroundColor: '#002e79', color: 'white' } : {}}
                                    className="pageNumberContainer"
                                    onClick={() => setSelectedPage(index)}>
                                    {index + 1}
                                </div>)
                            } else if (index == totalPage - 2 || index == 1) { return <div>...</div> }
                        })}
                        <div
                            className="nextPrev"
                            onClick={() => nextClick()}>Next</div>
                    </div> : null}
                </div>
            </div>
        </div>
    )
}