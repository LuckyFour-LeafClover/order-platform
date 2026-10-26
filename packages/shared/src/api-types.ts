// 与后端 Order 实体、与 Swagger schema 一一对应
export interface CreateOrderInput {
  productId: string;
  quantity: number;
  remark?: string;
}

export interface OrderDTO {
  id: string;
  orderNo: string;
  status: 'PENDING' | 'PAID' | 'SHIPPED' | 'DONE' | 'CANCELLED';
  amount: number;
  createdAt: string; // ISO8601
}
