var posts=["2018/09/04/multithreaded-correlation.html","2018/06/13/introduction-of-synchronized-lock.html","2018/06/11/synchronized-synchronous-lock-principle.html","2018/06/15/thread-life-cycle.html","2018/06/09/volatile-keyword.html","2018/09/05/thread-pool-principle-and-source-code-analysis.html","2021/04/07/design-patterns-strategy.html","2021/03/10/design-patterns-prototype.html","2018/08/17/use-enumeration-to-implement-a-singleton.html","2021/04/15/design-patterns-builder.html","2019/08/03/dubbo-bottom-structure-diagram.html","2018/02/21/lazy-singleton-mode-thread-safe.html","2019/08/04/springcloud-architecture-schematic.html","2019/08/18/redis-distributed-lock-production-problem-solution.html","2019/08/10/trading-system-architecture.html","2020/04/13/snowflake-algorithm.html","2019/08/17/how-to-land-the-final-consistency-transaction.html","2021/06/06/docker-mysql.html","2020/08/18/technology-sharing-es-1.html","2020/08/23/technology-sharing-es-2.html","2020/08/26/technology-sharing-es-4.html","2020/08/25/technology-sharing-es-3.html","2020/08/28/technology-sharing-es-5.html","2018/10/29/elk-common-start-command.html","2019/03/14/elasticsearch-cat-api.html","2018/06/26/elasticsearch-basic-statement.html","2019/03/12/elasticsearch-data-writing-process.html","2019/03/13/why-does-the-es-cluster-require-at-least-three-nodes.html","2018/06/20/filebeat-configuration.html","2018/06/20/monitoring-system-architecture.html","2018/06/20/logstash-configuration.html","2018/10/24/searchguard6-configuration-user.html","2018/10/23/searchguard6-installation.html","2019/07/20/gitalk-uses-md5-to-generate-an-id.html","2018/10/08/hexo-build-blog.html","2019/09/14/hexo-inserts-bilibili-video.html","2022/03/22/yuque-hexo-auto-deployment.html","2018/09/25/server-cpu-occupancy-rate-is-high.html","2018/08/21/value-injects-a-small-bug-in-the-property.html","2019/03/04/logstash-input-multiple-kafka-exceptions.html","2018/12/20/logstash-timestamp-difference-8-hours.html","2019/02/15/no-abnormal-interruption-of-the-program.html","2018/12/10/get-the-small-problem-encountered-by-ip-and-byte-to-long.html","2020/04/12/no-class-def-found-error-rule-configuration.html","2021/05/25/mac-common-software-java.html","2020/11/15/brew-list-warning.html","2020/01/05/mac-create-data-directory-failed.html","2021/06/06/mysql-next-key-1.html","2021/06/06/mysql-next-key-2.html","2021/06/06/mysql-next-key-3.html","2021/06/07/mysql-next-key-4.html","2020/04/20/markdown-code-folding.html","2020/07/29/tool-book-copy-as-json.html","2021/06/07/ides-plugin-toolkit-lombok.html","2020/08/01/idea-plugin-development-common-api.html","2019/05/11/idea-plugin-toolkit.html","2021/04/17/idea-plugin-toolkit-0417.html","2018/11/19/elimination-of-lru-cache-based-on-linkhashmap.html","2018/12/27/skywalking5-cluster-deployment.html","2021/11/17/lock-summary.html","2018/05/18/cglib-dynamic-proxy.html","2018/01/10/interceptor.html","2018/05/17/jdk-dynamic-proxy-and-source-code-analysis.html","2018/01/27/transactional-declarative-transaction.html","2018/05/21/springaop-agent-selection.html","2019/07/22/springsecurity-jwt-springboot-project.html","2020/11/01/doc-view.html","2020/11/19/doc-view-dubbo.html","2020/11/23/doc-view-template.html","2021/04/02/doc-view-editor.html","2020/09/06/source-tool-drawio.html","2022/04/15/google-search-blocking.html","2020/10/18/log-trace-id.html","2021/08/21/guide_to_mapper_overloading_crater_in_mybatis_plus.html","2021/09/30/rounding_of_the_time_field.html","2020/11/08/spring-self-call.html","2021/09/03/the_converter_converts_front_end_parameters_to_enumerations.html","2020/07/18/work-archetype.html","2020/09/19/work-trans-refund-table.html","2022/04/06/distributed_timed_task_multilayer_distribution.html","2020/10/11/work-trans-why-table-id.html","2020/10/18/header-name-case.html","2021/07/24/tips_for_locking_and_optimizing_concurrent_scenes.html","2021/07/12/curator-2.html","2021/07/14/curator-3.html","2021/07/15/curator-4.html","2021/07/16/curator-5.html","2022/01/13/dubbo_concept_and_architecture.html","2022/04/18/dubbo_source_code_reading_environment_construction.html","2020/07/12/source-code-aqs.html","2020/09/27/source-code-arrayblockingqueue.html","2018/08/23/arraylist-related-learning.html","2020/06/12/source-code-cas.html","2020/10/25/source-code-concurrentlinkedqueue.html","2020/10/01/source-code-condition.html","2020/10/31/copyonwritearraylist.html","2020/09/06/source-code-countdownlatch.html","2020/09/12/source-code-cyclicbarrier.html","2020/05/11/source-code-hashmap-init.html","2020/05/17/source-code-hashmap-resize.html","2020/05/25/source-code-hashmap-red-black-tree.html","2018/01/15/integer-wrapper-type-cache.html","2018/08/23/linklist-related-learning.html","2020/10/04/source-code-linkedblockingqueue.html","2020/07/05/source-code-locksupport.html","2020/06/28/source-code-longadder.html","2020/07/27/source-code-reentrant-read-write-lock.html","2020/07/25/source-code-reentrant-lock.html","2018/08/27/reflection-and-serialization-cracking-singleton.html","2020/09/20/source-code-semaphore.html","2020/08/09/source-code-stamped-lock.html","2020/06/21/source-code-threadlocal.html","2018/09/06/final-finally-finalize-difference.html","2021/06/28/redisson-1.html","2021/07/07/redisson-10.html","2021/07/07/redisson-11.html","2021/06/29/redisson-2.html","2021/06/30/redisson-3.html","2021/07/01/redisson-4.html","2021/07/02/redisson-5.html","2021/07/03/redisson-6.html","2021/07/04/redisson-7.html","2021/07/05/redisson-8.html","2021/07/06/redisson-9.html","2020/11/26/source-spring-build.html","2020/12/27/source-spring-10.html","2020/12/28/source-spring-11.html","2021/01/01/source-spring-12.html","2021/01/02/source-spring-13.html","2021/01/05/source-spring-14.html","2021/01/12/source-spring-15.html","2021/01/17/source-spring-16.html","2020/11/30/source-spring-02.html","2020/12/01/source-spring-03.html","2020/12/02/source-spring-04.html","2020/12/03/source-spring-05.html","2020/12/04/source-spring-06.html","2020/12/05/source-spring-07.html","2020/12/06/source-spring-08.html","2020/12/16/source-spring-09.html","2021/02/01/spring-sync-translational.html","2021/01/30/source-spring-circular-dependence-2.html","2021/01/23/source-spring-circular-dependence-1.html","2021/02/10/idea-postfix-completion.html","2021/02/15/idea-live-templates.html","2018/02/15/poi-read-and-write-excel-brief-introduction.html","2018/02/05/protostuff-serialization-tool.html","2018/08/24/reflection.html","2017/12/30/utils-tool-validationutil-parameter-check.html","2017/12/30/xml-parsing-dom4j.html","2017/12/17/xml-parsing-jaxbutil.html","2021/07/10/curator-1.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };