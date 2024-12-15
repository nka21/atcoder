#include <bits/stdc++.h>
using namespace std;

int main() {
    int N;
    cin >> N;
    vector<int> a_list(N);
    
    // 入力
    for (int i = 0; i < N; i++) {
        cin >> a_list.at(i);
    }
    
    // 数字の大きい順にソート
    sort(a_list.begin(), a_list.end());
    reverse(a_list.begin(), a_list.end());
    
    int AliceSum = 0, BobSum = 0;
    
    for (int i = 0; i < N; i++) {
        if (i == 0 || i % 2 == 0) {
            AliceSum += a_list.at(i);
        } else {
            BobSum += a_list.at(i);
        }
    }
    
    cout << AliceSum - BobSum << endl;
}
