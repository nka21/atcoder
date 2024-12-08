#include <bits/stdc++.h>
using namespace std;

int main() {
    
    int n, a;
    cin >> n;
    
    int minCount = 100;
    
    for (int i = 0; i < n; i++) {
        int count = 0;
        cin >> a;
        
        while (a % 2 == 0) {
            a /= 2;
            count++;
        }

        // 最小値を取得
        if (count < minCount) {
            minCount = count;
        }
    }
    
    cout << minCount << endl;
}