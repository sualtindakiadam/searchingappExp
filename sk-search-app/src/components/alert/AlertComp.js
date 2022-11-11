import React from "react"
import { Alert } from "@mui/material"
export default function AlertComp(props) {
    return (
        <div id="alertContainer" className="alertContainer">

            <Alert
                variant="filled"
                severity="error"
                onClose={() => 'close alert'}
            >
                error
            </Alert>

        </div>

    )
}


