export const FAQ = [
  {
    key: 'doitra',
    q: 'Chính sách đổi trả như thế nào?',
    a: 'Bạn có thể đổi trả sản phẩm trong vòng 7 ngày kể từ khi nhận hàng, với điều kiện sản phẩm còn nguyên tem mác và chưa qua sử dụng. Phí vận chuyển đổi trả do lỗi từ nhà bán sẽ được hoàn lại.',
    kw: ['đổi trả', 'hoàn trả', 'trả hàng', 'trả lại'],
  },
  {
    key: 'vanchuyen',
    q: 'Thời gian giao hàng bao lâu?',
    a: 'Thời gian giao hàng tiêu chuẩn từ 2–4 ngày làm việc với nội thành, và 3–6 ngày với các tỉnh thành khác. Bạn có thể theo dõi đơn hàng ngay trong mục "Đơn hàng của tôi".',
    kw: ['giao hàng', 'vận chuyển', 'ship', 'bao lâu'],
  },
  {
    key: 'thanhtoan',
    q: 'Các phương thức thanh toán được hỗ trợ?',
    a: 'Chúng tôi hỗ trợ thanh toán khi nhận hàng (COD), chuyển khoản ngân hàng, ví điện tử (Momo, ZaloPay) và thẻ tín dụng/ghi nợ quốc tế.',
    kw: ['thanh toán', 'payment', 'trả tiền', 'momo', 'zalopay', 'thẻ'],
  },
  {
    key: 'baohanh',
    q: 'Chính sách bảo hành sản phẩm?',
    a: 'Sản phẩm được bảo hành chính hãng từ 12–24 tháng tùy loại. Vui lòng giữ hóa đơn hoặc phiếu bảo hành để được hỗ trợ nhanh nhất.',
    kw: ['bảo hành', 'warranty'],
  },
  {
    key: 'huydon',
    q: 'Làm sao để hủy đơn hàng?',
    a: 'Bạn có thể hủy đơn trong vòng 1 giờ sau khi đặt tại mục "Đơn hàng của tôi" → chọn đơn cần hủy → "Hủy đơn". Sau thời gian này vui lòng liên hệ tổng đài để được hỗ trợ.',
    kw: ['hủy đơn', 'hủy hàng', 'cancel'],
  },
  {
    key: 'lienhe',
    q: 'Làm sao để liên hệ nhân viên hỗ trợ?',
    a: 'Bạn có thể gọi hotline 1900 xxxx (8h–21h hằng ngày) hoặc nhắn "gặp nhân viên" ngay tại đây, hệ thống sẽ chuyển tiếp cuộc trò chuyện cho bộ phận chăm sóc khách hàng.',
    kw: ['liên hệ', 'nhân viên', 'hotline', 'tổng đài', 'gặp người'],
  },
]

export const FALLBACK =
  'Xin lỗi, mình chưa tìm thấy câu trả lời phù hợp cho câu hỏi này 🙏. Bạn có thể chọn một chủ đề gợi ý bên dưới, hoặc nhắn "gặp nhân viên" để được hỗ trợ trực tiếp.'

export function findAnswer(text) {
  const lower = text.toLowerCase()
  for (const item of FAQ) {
    if (item.kw.some((k) => lower.includes(k))) return item.a
  }
  if (lower.includes('gặp nhân viên') || lower.includes('gặp người')) {
    return 'Mình đã ghi nhận yêu cầu, một nhân viên hỗ trợ sẽ tiếp nhận cuộc trò chuyện này trong ít phút. Cảm ơn bạn đã chờ 🙏'
  }
  return null
}
