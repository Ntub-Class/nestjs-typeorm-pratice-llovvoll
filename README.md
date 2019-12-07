# 回家作業

## 請練習typeorm的安裝與設定

### 建立user資料表，並實作三次遷移檔(migration)的產生跟執行，以下操作都在user module裡實作，請自行用cli產出，並把最後結果推上，必須包含三次的migration file

1. 建立user.entity.ts
2. 第一次的user表為id(必須自動產生)、name，兩個欄位，並且產生migration file，然後推到資料庫上
3. 第二次的user表為**新增**address欄位，並產生migration file，然後推到資料庫上
4. 第三次的user表為**新增**phone欄位，**移除**name欄位，並產生migration file，然後推到資料庫上

![](./1.png)
![](./2.png)