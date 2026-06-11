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

  errorBanner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    padding: "14px 16px",
    marginBottom: "20px",
    borderRadius: "12px",
    background: "#FFF7ED",
    border: "1px solid #FDBA74",
    color: "#9A3412",
  },

  errorTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "4px",
  },

  errorText: {
    fontSize: "14px",
    lineHeight: 1.4,
  },

  retryButton: {
    padding: "10px 14px",
    border: "none",
    borderRadius: "8px",
    background: "#EA580C",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    whiteSpace: "nowrap",
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
