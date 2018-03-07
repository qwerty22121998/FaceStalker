#include<bits/stdc++.h>
using namespace std;

vector<int> pages;

int nFrames;
int nPages;

set<int> ele;
map<int, int> pos;
list<int> frame;
void add(int page, int now) {
    if (ele.find(page) == ele.end()) {
        if (frame.size() >= nFrames) {
            list<int>::iterator out = frame.begin();
            for(list<int>::iterator it = frame.begin(); it!= frame.end(); it++) {
                out = (pos[*out] < pos[*it]) ? out : it;
            }
            ele.erase(*out);
            ele.insert(page);
            *out = page;

        } else
            frame.push_back(page);
        ele.insert(page);
    }
    pos[page] = now;

    for(list<int>::iterator it = frame.begin(); it != frame.end(); it++) {
        cout << *it << " ";
    }
    for(int i = frame.size(); i < nFrames; i++)
        cout << "-1 ";
    cout << endl;
}


int main() {
    cout << "Enter number of frames : ";
    cin >> nFrames;
    cout << "Enter number of pages : ";
    cin >> nPages;
    cout << "Enter reference string : ";
    for(int i = 0; i < nPages; i++) {
        int tmp;
        cin >> tmp;
        pages.push_back(tmp);
    }
    for(int i = 0; i < nPages; i++)
        add(pages[i], i);

}
