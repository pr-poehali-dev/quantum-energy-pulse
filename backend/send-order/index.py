import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заказа на почту мастерской ФОРМА через Яндекс SMTP"""
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    items = body.get("items", [])
    name = body.get("name", "")
    phone = body.get("phone", "")
    comment = body.get("comment", "")
    total = body.get("total", 0)

    items_html = "".join(
        f"<tr><td style='padding:8px;border-bottom:1px solid #eee'>{item['name']}</td>"
        f"<td style='padding:8px;border-bottom:1px solid #eee'>{item['material']}</td>"
        f"<td style='padding:8px;border-bottom:1px solid #eee;text-align:right'>{item['price']:,} ₽</td></tr>".replace(",", " ")
        for item in items
    )

    html = f"""
    <html><body style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:0 auto">
    <div style="background:#1c1917;padding:20px;text-align:center">
      <img src="https://cdn.poehali.dev/projects/7a50b8f3-38c8-4f9f-b15f-add5ff3c56f5/bucket/937fa195-056c-4234-a851-27babec27198.png"
           alt="ФОРМА" style="height:40px;filter:brightness(0) invert(1)">
    </div>
    <div style="padding:30px;background:#fff">
      <h2 style="color:#1c1917;margin-top:0">Новая заявка на заказ</h2>

      <table style="width:100%;border-collapse:collapse;margin-bottom:20px">
        <tr style="background:#f5f5f4">
          <th style="padding:8px;text-align:left">Изделие</th>
          <th style="padding:8px;text-align:left">Материал</th>
          <th style="padding:8px;text-align:right">Цена</th>
        </tr>
        {items_html}
        <tr style="font-weight:bold;background:#fef3c7">
          <td colspan="2" style="padding:10px">Итого</td>
          <td style="padding:10px;text-align:right">{total:,} ₽</td>
        </tr>
      </table>

      <h3 style="color:#1c1917">Данные клиента</h3>
      <p><strong>Имя:</strong> {name}</p>
      <p><strong>Телефон:</strong> {phone}</p>
      {"<p><strong>Комментарий:</strong> " + comment + "</p>" if comment else ""}
    </div>
    <div style="background:#f5f5f4;padding:15px;text-align:center;font-size:12px;color:#78716c">
      Мастерская ФОРМА · Енакиево, ДНР · @djgorbunov · +7 951 846 62 04
    </div>
    </body></html>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Мастерская ФОРМА - изделия из дерева ручной работы"
    msg["From"] = "djgorbunov@yandex.ru"
    msg["To"] = "djgorbunov@yandex.ru"
    msg.attach(MIMEText(html, "html", "utf-8"))

    smtp_password = os.environ.get("YANDEX_SMTP_PASSWORD", "")
    if not smtp_password:
        return {
            "statusCode": 503,
            "headers": cors_headers,
            "body": json.dumps({"error": "SMTP not configured"}),
        }

    with smtplib.SMTP_SSL("smtp.yandex.ru", 465) as server:
        server.login("djgorbunov@yandex.ru", smtp_password)
        server.sendmail("djgorbunov@yandex.ru", "djgorbunov@yandex.ru", msg.as_string())

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"ok": True}),
    }
