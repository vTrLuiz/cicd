var resLog;

if (response.content !== undefined) {
  resLog = JSON.parse(response.content);
} else {
  resLog = null;
}

delete resLog.ibge
delete resLog.siafi
delete resLog.gia
delete resLog.complemento
delete resLog.ddd

context.setVariable("resLog", JSON.stringify(resLog));

response.content = JSON.stringify(resLog);
