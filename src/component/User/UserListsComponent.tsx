import React from "react";
import MaterialTable, { Column } from "material-table";
import "./UserLists.css";
import { TableState } from "../../adapter/usecase/UserLists";

export default function UserListsComponent() {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: "Name", field: "name" },
      { title: "UCC", field: "ucc" },
      { title: "Mobile", field: "mobile", type: "numeric" },
      { title: "Email", field: "email" },
      { title: "PAN", field: "pan" },
      { title: "Stage", field: "stage" },
      { title: "AOF - downloas AOF", field: "aof" },
    ],
    data: [
      {
        name: "Mani",
        ucc: "UCC Data",
        mobile: 305556688,
        email: "tst@gmail.com",
        stage: "stage data",
        pan: "BYTPS222S",
        aof: "aof data",
      },
      {
        name: "Deepak",
        ucc: "UCC Data",
        mobile: 305556688,
        email: "tst@gmail.com",
        stage: "stage data",
        pan: "BYTPS222S",
        aof: "aof data",
      },
      {
        name: "Birendra",
        ucc: "UCC Data",
        mobile: 305556688,
        email: "tst@gmail.com",
        stage: "stage data",
        pan: "BYTPS222S",
        aof: "aof data",
      },
      {
        name: "Govind",
        ucc: "UCC Data",
        mobile: 305556688,
        email: "tst@gmail.com",
        stage: "stage data",
        pan: "BYTPS222S",
        aof: "aof data",
      },
      {
        name: "Alok",
        ucc: "UCC Data",
        mobile: 305556688,
        email: "tst@gmail.com",
        stage: "stage data",
        pan: "BYTPS222S",
        aof: "aof data",
      },
      {
        name: "Mehmet",
        ucc: "UCC Data",
        mobile: 305556688,
        email: "tst@gmail.com",
        stage: "stage data",
        pan: "BYTPS222S",
        aof: "aof data",
      },
    ],
  });

  return (
    <MaterialTable
      title=""
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
