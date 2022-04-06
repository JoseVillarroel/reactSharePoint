import React, { useEffect } from "react";
// import { sp } from "";

const SecondPage = () => {
  const fetchData = async () => {
    const data = await fetch(
      `https://grupoentel.sharepoint.com/sites/Estacionamientos/Desarrollo/_api/web/lists/getbytitle('Usuario')/items`,
      {
        headers: { Accept: "application/json; odata=verbose;" }
      }
    );
    const dataJson = await data.json();
    console.log(dataJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      hola mundo
    </div>
  );
};

// class secondPage extends React.Component {
//   componentDidMount() {
//     var reactHandler = this;
//     jquery.ajax({
//       url: `${this.props.siteurl}/_api/web/lists/getbytitle('EmployeeList')/items`,
//       type: "GET",
//       ,
//       success: function (resultData) {
//         reactHandler.setState({
//           items: resultData.d.results
//         });
//       },
//       error: function (jqXHR, textStatus, errorThrown) {}
//     });
//   }
// }

export default SecondPage;
