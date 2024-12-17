#include <bits/stdc++.h>
using namespace std;

int main() {
    int N;
    cin >> N;
    
    vector<int> A(N);
    
    for (int i = 0; i < N; i++) cin >> A[i];
    
    int dif = 0;
    int max_dif = 0;
    
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {

            if (A[i] < A[j]) dif = A[j] - A[i];
            else if (A[i] > A[j]) dif = A[i] - A[j];
            else continue;
            
            max_dif = max(max_dif, dif);
        }
    }
    
    cout << max_dif << endl;
}