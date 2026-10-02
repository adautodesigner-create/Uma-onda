// Checagem auxiliar em worker dedicado. Não é um alarme do sistema:
// o navegador ainda pode suspender o worker ou encerrar a página.
setInterval(() => self.postMessage({ type: 'check-alarms', at: Date.now() }), 5000);
