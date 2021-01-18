import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = tickets => {
  const doc = new jsPDF();

  const tableColumn = ["Id", "Colaborador", "data de início", "Data final", "Duração"];
  const tableRows = [];

  tickets.forEach(ticket => {
    const ticketData = [
      ticket.id,
      ticket.colaborador.login,
      ticket.dataInicio,
      ticket.dataFim,
      ticket.duracao,
    ];
    tableRows.push(ticketData);
  });

  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  doc.text("Relatório de Resgistro de Férias", 14, 15);
  doc.save(`relatorio.pdf`);
};

export default generatePDF;