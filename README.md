Some note:
- Alpha : Trigger thời điểm nên place order (vào lệnh mua). Hiện tại dựa trên các chỉ số SMA và RSI để chọn thời điểm đảo chiều (bắt đáy)
- Beta : Perform back-testing để validate sau 15min, 30min, 45 min kể từ thời điểm trigger -> Xem actual value như thế nào -> show trên FE https://petiteo.com/crypto.html
- Gamma : Call API đến sàn Onus đặt lệnh tự động

-> Hiện 3 service này chạy trên con VPS IP address: 103.173.66.235 và connect với nhau trên socket localhost:65432
