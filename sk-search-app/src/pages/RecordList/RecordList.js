import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { GoLocation } from "react-icons/go"
import { GrNext, GrPrevious } from "react-icons/gr"
import "./RecordList.scss"
import moment from 'moment'
import TesodevLogo from "../../components/TesodevLogo";
import Search from "../../components/search/Search";
import Button from "../../components/Button";
import Footer from "../../components/footer/footer";
import RecordListItem from "../../components/RecordListItem/RecordListItem";
import { setSearchedData } from "../../redux/actions/setSearchedData";
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
        console.log("change order by ")
        switch (orderById) {
            case 1:
                console.log("name asc order by");
                console.log(searchedData.sort((a, b) => { return a[0].toString().toLowerCase() > b[0].toString().toLowerCase() }));
                //  setData(searchedData.sort())
                break;
            case 2:
                console.log("name desc order by");
                console.log(searchedData.sort((a, b) => { return a[0].toString().toLowerCase() < b[0].toString().toLowerCase() }));

                // setData(searchedData.sort((a, b) => { return b > a }));
                break;
            case 3:
                console.log("name desc order by");
                //console.log(searchedData.sort((a, b) => { return a[3].toString().toLowerCase() > b[3].toString().toLowerCase() }));
                 console.log(searchedData.sort(function (a, b) {
                                   const datea = moment(a[3]).format('YYY/MM/DD')
                                   const dateb = moment(b[3]).format('YYY/MM/DD')
                                   console.log(datea, " ------ ", dateb);
                                   return datea > dateb
                               }));
                break;
            case 4:
                console.log("name desc order by");
                /* setData(searchedData.sort(function (a, b) {
                     const datea = moment(a[3]).format('YYY/MM/DD')
                     const dateb = moment(b[3]).format('YYY/MM/DD')
                     console.log(datea, " ------ ", dateb);
                     return dateb > datea
                 }));*/
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <div className="headerContainer1">
                <div className="logoContainer1">
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
                    <div className="fullListContainer">
                        <RecordListItem
                            startIndex={pageSize * selectedPage}
                            endIndex={pageSize * (selectedPage + 1)}
                        />
                    </div>
                    <div className="paginationContainer">
                        <div className="nextPrewContainer">
                            <GrPrevious onClick={() => prevClick()} />
                        </div>
                        {searchedData.slice(0, totalPage).map((d, index) => {
                            if ((index < selectedPage + 3 && index > selectedPage - 3) || index == totalPage - 1 || index == 0) {
                                return (<div
                                    style={{ backgroundColor: index == selectedPage ? '#008CBA' : null }}
                                    className="pageNumberContainer"
                                    onClick={() => setSelectedPage(index)}>
                                    {index + 1}
                                </div>)
                            } else if (index == totalPage - 2 || index == 1) { return <div>...</div> }
                        })}
                        <div className="nextPrewContainer">
                            <GrNext onClick={() => nextClick()} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}