var schemes = {
  statics: {
    base: 'jdq://app',
    android: {
      index: {
        url: 'andActName=MainView&andActValue=0'
      },
      search: {
        url: 'andActName=MainView&andActValue=1'
      },
      center: {
        url: 'andActName=MainView&andActValue=2'
      },
      bbs: {
        url: 'andActName=MainView&andActValue=4'
      },
      credit: {
        url: 'andActName=MainView&andActValue=3'
      },
      html: {
        url: 'andActName=WebView&andActValue=',
        address: ''
      },
      product_detail: {
        url: 'andActName=LoanProductDetailView&andActValue=',
        id: ''
      },
      one_one: {
        url: 'andActName=XdbApplyLoanView'
      },
      gift: {
        url: 'andActName=RedPackListView'
      },
      cash: {
        url: 'andActName=MyCashView'
      },
      keeper: {
        url: 'andActName=LoanMgtView'
      },
      invite: {
        url: 'andActName=MakeMoneyView'
      },
      task: {
        url: 'andActName=MyTaskView'
      },
      person: {
        url: 'andActName=UserInfoView'
      },
      apply_history: {
        // 申请记录
        url: 'andActName=LoanRecordListView'
      },
      api_result: {
        url: 'andActName=NewApiResultView&andActValue=',
        param: {
          channelName: '',
          channelId: '',
          applicationId: '',
          loanId: ''
        }
      }
    },
    ios: {
      index: {
        param: {
          tabBar: '0'
        }
      },
      search: {
        // 修复审核状态兼容性
        param: {
          ViewController: 'LoanSearchListViewController'
        }
      },
      center: {
        param: {
          tabBar: '4'
        }
      },
      bbs: {
        param: {
          tabBar: '3'
        }
      },
      credit: {
        param: {
          tabBar: '1'
        }
      },
      html: {
        param: {
          login: 'ture',
          ViewController: 'WebViewController',
          info: {
            url: ''
          }
        }
      },
      product_detail: {
        param: {
          ViewController: 'BrandDetailviewController',
          info: {
            'LoanPlatform|loanPlatform': {
              loan_id: ''
            }
          }
        }
      },
      one_one: {
        param: {
          login: 'ture',
          ViewController: 'FastEntryController'
        }
      },
      gift: {
        param: {
          login: 'ture',
          ViewController: 'UseRedPacketsController'
        }
      },
      cash: {
        param: {
          login: 'ture',
          ViewController: 'UseCapitalController'
        }
      },
      keeper: {
        param: {
          login: 'ture',
          ViewController: 'HouseKeeperController'
        }
      },
      invite: {
        param: {
          login: 'ture',
          ViewController: 'MakeMoneyController'
        }
      },
      task: {
        param: {
          login: 'ture',
          ViewController: 'TaskController'
        }
      },
      person: {
        param: {
          login: 'ture',
          ViewController: 'PersonalInfoController'
        }
      },
      apply_history: {
        param: {
          login: 'true',
          ViewController: 'LoanOrderListViewController'
        }
      },
      api_result: {
        param: {
          login: 'true',
          ViewController: 'ApiLoanResultsDetailsController',
          info: {
            'LoanOrderEntity|loanOrderEntity': {
              loan_id: '',
              channelName: '',
              application_id: '',
              channel_id: ''
            }
          }
        }
      }
    }
  },
  getStr: function(name, para) {
    var backUrl = '';
    /**
     * 需要参数的配置地址
     */
    var extraParamMethod = ['product_detail', 'html', 'api_result'];
    try {
      var android, ios, seperate, android_para, ios_para;
      seperate = ['product_detail', 'html'].indexOf(name) !== -1;
      if (seperate) {
        android = this['statics']['android'][name]['url'];
        ios = this['statics']['ios'][name]['param']
      }
      /**
       * 参数处理
       */
      if (extraParamMethod.indexOf(name) !== -1) {
        if (!para) {
          throw new Error('请提供参数')
        }
        switch (name) {
          case 'product_detail':
            ios['info']['LoanPlatform|loanPlatform']['loan_id'] = para;
            android += para;
            break;
          case 'html':
            ios.info.url = para;
            android += para;
            break;
          case 'api_result':
            android_para = this['statics']['android'][name]['param'];
            ios_para = this['statics']['ios'][name]['param']['info'][
              'LoanOrderEntity|loanOrderEntity'
            ];

            if (
              !para.channelName ||
              !para.channelId ||
              !para.applicationId ||
              !para.loanId
            ) {
              throw new Error(
                '请提供必备参数： channelName／channelId／applicationId／loanId'
              )
            }
            android_para.channelName = para.channelName;
            android_para.channelId = para.channelId;
            android_para.applicationId = para.applicationId;
            android_para.loanId = para.loanId;

            ios_para.channelName = para.channelName;
            ios_para.channel_id = para.channelId;
            ios_para.application_id = para.applicationId;
            ios_para.loan_id = para.loanId;

            break
        }
      }
      /**
       * URL处理
       */
      if (seperate) {
        ios = JSON.stringify(ios);
        ios = encodeURIComponent(ios);
        backUrl = this.statics.base + '?' + android + '&ios=' + ios;
        console.log(backUrl)
      } else {
        ios = JSON.stringify(this['statics']['ios'][name]['param']);
        android = JSON.stringify(android_para);
        ios = encodeURIComponent(ios);
        android = encodeURIComponent(android);
        backUrl =
          this.statics.base +
          '?' +
          this['statics']['android'][name]['url'] +
          android +
          '&ios=' +
          ios;
        console.info(backUrl)
      }
    } catch (e) {
      console.error('请求参数不合法');
      throw e
    }

    return backUrl
  },
  goto: function(name, param) {
    /**
     * 跳转以上scheme
     * 特定scheme需提供param
     * TODO: 添加平台判断
     * @type {[type]}
     */

    var url = this.getStr(name, param);
    // DEBUG
    var openCustomURLinIFrame = function(src) {
      window.location.replace(src)
    };
    openCustomURLinIFrame(url)
  }
};

window.schemes = schemes;
