import React from "react";

const StationList = () => {
    

    return(
        <div>
            <table>
                <tr>
                    <th><button onClick={() => { window.location.href = "/AtlanticCity"}}>Atlantic City</button></th>
                    <th><button onClick={() => { window.location.href = "/MBCounty"}}>Main-Bergen County</button></th>
                    <th><button onClick={() => { window.location.href = "/MontclairBoonton"}}>Montclair-Boonton</button></th>
                </tr>
                <tr>
                    <th><button>Morris & Essex</button></th>
                    <th><button>Northeast Corridor</button></th>
                    <th><button>North Jersey Coast</button></th>
                </tr>
                <tr>
                    <th><button>Pascack Valley</button></th>
                    <th><button>Raritan Valley</button></th>
                </tr>
            </table>
        </div>
        )
}

export default StationList;