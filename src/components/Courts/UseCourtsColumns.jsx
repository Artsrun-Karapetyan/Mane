import EditCourtsModal from "./EditCourtsModal";
import DeleteCourtsModal from "./DeleteCourtsModal";

export const useCourtsColumns = ({ data = [] }) => {
  return [
    {
      id: "id",
      label: "id",
    },

    {
      id: "name",
      label: "Անուն",
    },

    {
      id: "city",
      label: "Քաղաք",
    },

    {
      id: "actions",
      label: "Գործողություններ",
      render: (value, row) => {
        const id = row.id;
        return (
          <>
            <EditCourtsModal id={id} />
            <DeleteCourtsModal id={id} />
          </>
        );
      },
    },
  ];
};
