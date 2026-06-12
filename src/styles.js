import theme from "./theme";

const styles = {
  page: {
    padding: "20px",
    background: `
      radial-gradient(circle at top left, rgba(37, 99, 235, 0.08), transparent 32%),
      radial-gradient(circle at top right, rgba(124, 58, 237, 0.06), transparent 28%),
      linear-gradient(180deg, ${theme.colors.surface} 0%, ${theme.colors.pageBg} 24%, ${theme.colors.pageBg} 100%)
    `,
    minHeight: "100vh",
    fontFamily: theme.typography.fontFamily,
    color: theme.colors.text,
  },

  shell: {
    maxWidth: "1560px",
    margin: "0 auto",
  },

  loading: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: 600,
    color: theme.colors.textMuted,
  },

  errorBanner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    padding: "14px 16px",
    marginBottom: "20px",
    borderRadius: theme.radius.sm,
    background: "#FFF8F1",
    border: "1px solid #FED7AA",
    color: "#9A3412",
    boxShadow: theme.shadows.card,
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
    borderRadius: theme.radius.sm,
    background: theme.colors.danger,
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    whiteSpace: "nowrap",
    boxShadow: theme.shadows.soft,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    marginBottom: "18px",
    padding: "20px 22px",
    background: "rgba(255, 255, 255, 0.9)",
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.panel,
    backdropFilter: "blur(16px)",
    flexWrap: "wrap",
  },

  title: {
    fontSize: "28px",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 1.1,
  },

  filterContainer: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    alignItems: "center",
    marginLeft: "auto",
  },

  select: {
    height: "44px",
    padding: "0 14px",
    borderRadius: theme.radius.sm,
    border: `1px solid ${theme.colors.border}`,
    background: theme.colors.surface,
    color: theme.colors.text,
    boxShadow: theme.shadows.inset,
    minWidth: "138px",
    fontSize: "14px",
  },

  button: {
    height: "44px",
    padding: "0 16px",
    background: theme.gradients.primary,
    color: "white",
    border: "none",
    borderRadius: theme.radius.sm,
    cursor: "pointer",
    boxShadow: theme.shadows.card,
    fontWeight: 700,
    fontSize: "14px",
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "18px",
    marginBottom: "18px",
  },

  card: {
    padding: "20px",
    borderRadius: theme.radius.md,
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
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: "18px",
  },

  chartCard: {
    background: "rgba(255,255,255,0.96)",
    padding: "20px",
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.card,
    border: `1px solid ${theme.colors.border}`,
    transition: "transform 160ms ease, box-shadow 160ms ease",
  },

  monthCard: {
    background: "rgba(255,255,255,0.96)",
    padding: "20px",
    borderRadius: theme.radius.lg,
    marginTop: "18px",
    boxShadow: theme.shadows.card,
    border: `1px solid ${theme.colors.border}`,
    transition: "transform 160ms ease, box-shadow 160ms ease",
  },

  chartTitle: {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "14px",
    color: theme.colors.text,
  },

  tableCard: {
    background: theme.colors.surface,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.card,
    border: `1px solid ${theme.colors.border}`,
    padding: "18px 20px",
  },

  tableTitle: {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "14px",
    color: theme.colors.text,
  },

  footer: {
    textAlign: "center",
    marginTop: "18px",
    fontWeight: 600,
    color: theme.colors.textMuted,
    fontSize: "13px",
    paddingBottom: "8px",
  },

  appShell: {
    background: theme.colors.surfaceSoft,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.radius.lg,
    boxShadow: theme.shadows.panel,
    overflow: "hidden",
  },
};

export default styles;   
