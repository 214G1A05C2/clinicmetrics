const styles = {
  page: {
    padding: "20px",
    background: "#F1F5F9",
    minHeight: "100vh",
    fontFamily: "Arial",
  },

  loading: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px",
    fontWeight: "bold",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },

  title: {
    fontSize: "38px",
    fontWeight: "bold",
  },

  filterContainer: {
    display: "flex",
    gap: "12px",
  },

  select: {
    padding: "10px",
  },

  button: {
    padding: "10px 15px",
    background: "#2563EB",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    gap: "25px",
    marginBottom: "30px",
  },

  card: {
    padding: "20px",
    borderRadius: "15px",
    color: "white",
  },

  cardTitle: {
    fontSize: "18px",
  },

  cardValue: {
    fontSize: "36px",
    fontWeight: "bold",
  },

  chartGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
  },

  chartCard: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
  },

  monthCard: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    marginTop: "20px",
  },

  chartTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "15px",
  },

  footer: {
    textAlign: "center",
    marginTop: "30px",
    fontWeight: "bold",
  },
};

export default styles;   